import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { asyncRemove } from '../store/actions/gardenPlanAction.jsx'


const Plan = () => {
    const {plans}= useSelector(store=>store.gardenPlanSlice)

    const { id } = useParams()
    const plan = plans.find(plan => plan.id === id)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const deleteHandler = () => {

        dispatch(asyncRemove(id))
        toast.success("Plans deleted successfully")
        navigate('/plans')

    }



    return (plan ?
        <div className='w-full bg-zinc-200/[0]'>
            <div className="top bg-[#919591]/[0] py-10 md:gap-20 gap-8 flex md:flex-row flex-col items-center md:px-10">
                <div className="img bg-[#c2c4c2] w-max rounded-full overflow-hidden">
                    <img className='h-full w-80' src={plan.planimg} alt="" />
                </div>
                <div className="about">
                    <h1 className='md:text-6xl text-3xl text-center md:text-start md:mb-8 mb-10 text-[#6a796a]'>{plan.planname}</h1>

                    <div className="boxes flex gap-6 items-center md:flex-row flex-col md:px-0 px-10">
                        <div className="flex items-center gap-6 w-full md:w-max">
                            <div className="box md:w-32 w-[50%] h-28 flex flex-col gap-2 items-center rounded-lg px-6 bg-yellow-700/[.6] p-4">
                                <i className="ri-sun-fill text-yellow-100 text-4xl"></i>
                                <h1 className='text-yellow-100 font-bold w-full text-center rounded-md capitalize'>{plan.plansunlight}</h1>
                            </div>
                            <div className="box md:w-32 w-[50%] h-28 flex flex-col gap-2 items-center rounded-lg px-6 bg-blue-900/[.6] p-4">
                                <i className="ri-drop-fill text-blue-100 text-3xl"></i>
                                <h1 className='text-blue-100 font-bold w-full text-center rounded-md capitalize'>{plan.planwater}</h1>
                            </div>
                        </div>
                        <div className="box md:min-w-32 w-full md:h-28 flex flex-col gap-2 items-center rounded-lg px-6 bg-neutral-400 p-4">
                            <i className="ri-flower-fill text-neutral-200 text-3xl"></i>
                            <ul className='flex md:flex-row flex-col items-center orb-normal text-neutral-100'>
                                {plan.planplants ? plan.planplants.split(',').map((plant, i) => {
                                    return (
                                        <li key={i} className='md:mx-4 font-bold orb-normal'>{plant}</li>
                                    )
                                }):"No plants listed."}
                            </ul>
                        </div>
                    </div>
                    <h1 className='text-[#6a796a] md:px-0 md:text-2xl px-10 mt-4 mb-1 leading-tight text-sm'>Description ~</h1>
                    <p className='md:w-[60%] md:px-0 px-10 md:text-lg md:leading-6 leading-tight text-sm'>{plan.plandesc?plan.plandesc:'No description provided.'}</p>
                    <div className="btns px-10 md:px-0 flex items-center w-full md:justify-start justify-between gap-4 md:mt-4 mt-10">
                        <NavLink to={`/update/${id}`}>

                            <button className='px-4 py-1.5 rounded text-[#6a796a] border border-[#6a796a] font-bold uppercase'>Update</button>
                        </NavLink>
                        <button onClick={deleteHandler} className='px-4 py-1.5 rounded text-rose-500  border border-rose-500 font-bold uppercase'>Delete</button>
                    </div>
                </div>

            </div>
            <div className="desc md:px-20 px-10 md:mt-20  pb-10">
                <h1 className='text-[#6a796a] text-2xl md:text-4xl md:pb-4 mb-4 border-b border-[#6a796a] '>Planting Instruction</h1>
                <ul className=' list-decimal pl-4'>
                    {plan.planinstructions ? plan.planinstructions.split('.').map((instruct, i, len) => {
                        return (
                            i != len.length - 1 ? <li className=' md:text-lg'  key={i}>{instruct}.</li> : ''
                        )
                    }): "No instructions provided."}
                </ul>
                <h1 className='text-[#6a796a] text-2xl md:text-4xl md:pb-4 mb-4 md:mt-10 mt-8 border-b border-[#6a796a] '>Care Tips</h1>
                <h4 className=' md:text-md  md:leading-6 md:pl-4'>{plan.plantips?plan.plantips:"No tips provided."}</h4>


            </div>

        </div>
        :
        <h1>No such plan.</h1>
    )
}

export default Plan
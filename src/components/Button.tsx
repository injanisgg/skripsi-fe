import { useNavigate } from "react-router-dom"

export default function Button() {
    const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/classify')} className='flex gap-1 bg-white rounded-xl p-2 items-center mt-2'>
        <i className="fa-solid fa-circle-chevron-right"></i>
        <p className='text-sm font-secondary font-semibold'>Start Classify</p>
    </button>
  )
}

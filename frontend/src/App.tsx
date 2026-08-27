import Navbar from './components/Navbar'
import WidgetLayout from './components/widgets/WidgetLayout'

function App() {
  return(
    <>
    <Navbar/>
    <div className='w-100 d-flex flex-col justify-content-center'>

      <div className=' container m-5 d-flex flex-column gap-3 '>
        <WidgetLayout header='Test Widget' iconAlt='Test Icon' iconHref='' content={<div>Test Content</div>} modal={null}/>
        <WidgetLayout header='Test Widget' iconAlt='Test Icon' iconHref='' content={null} modal={null}/>
      </div>
    </div>
    </>
  )
}

export default App

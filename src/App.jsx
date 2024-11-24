
import './App.css'
import GrandPa from './components/grandPa/GrandPa'
// import ReuseableForm from './components/reuseableForm/ReuseableForm'
// import Count1 from './components/count1/Count1'
// import Count2 from './components/count2/Count2'
// import HookForm from './components/hookForm/HookForm'
// import RefForm from './components/refForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

// const handleSignUpSubmit = data => {
//   console.log('sign up data', data)
// }
// const handleUpdateProfile = data => {
//   console.log('profile update', data)
// }

  return (
    <div>
      <h1>Form master</h1>


      <GrandPa ></GrandPa>
      {/* <SympleForm></SympleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <Count1></Count1> <hr className='m-7' /> */}
      {/* <Count2></Count2> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm 
        formTitle={'Sing Up'} 
        handleSubmit={handleSignUpSubmit}
      >
        <div>
          <h2>Submit Now</h2>
          <p>Please Submit your form</p>
        </div>
      </ReuseableForm>

      <ReuseableForm 
        formTitle={'Profile Update'} 
        handleSubmit={handleUpdateProfile}  
        submitBtnText={'Update'}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Update your profile Picture</p>
        </div>
      </ReuseableForm> */}

    </div>
  )
}

export default App

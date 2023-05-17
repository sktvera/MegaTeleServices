import React, { Component } from 'react'
import theBestTvServiceAround from './Assets/Img/theBestTvServiceAround.png'
import AwesomeLetIsGetStartedWithTheBasics from './Assets/Img/AwesomeLetIsGetStartedWithTheBasics.png'
import PleasureToMeetYouCristianWhatIsYourInstallAddress from './Assets/Img/PleasureToMeetYouCristianWhatIsYourInstallAddress.png'
import Selected from './Assets/Img/Selected.png'
import SelectedOneOption from './Assets/Img/SelectedOneOption.png'
import PleaseSelectTvPlanYouWantToEnjoy from './Assets/Img/PleaseSelectTvPlanYouWantToEnjoy.png'
import GreatNewsYourFirstMonthIsFree from './Assets/Img/GreatNewsYourFirstMonthIsFree.png'
import './Assets/styles.css'

const EnterprisBody =()=> {

    return (
     <div className='contained-EnterprisBody'>
       <div className='EnterprisBody'>

        <div>
          
        <div className='titles'>
            <div> <h2>MEGA TV Services</h2></div>
            <div className='line'/>
        </div>
        <div>
          <p>
          MEGA Services is a new platform to contract television services in a building. The main objective is to help users contract a cable TV service for their home.
          </p>
          <p>
          To do so, the company has to create a new web application that allows users to register to find out if the building they live in currently has a cable TV system so they can purchase it.
          </p>
        </div>
        </div>

        <div>
          
          <div className='titles'>
              <div> <h2>What do you have to do?</h2></div>
              <div className='line'/>
          </div>
          <div>
            <p>
            MEGA Services needs to implement an incredible web page where users can check if there is availability in their building to purchase a TV plan, in addition to being able to attract potential new customers with their respective residence address.
            </p>
            <p>
            The Design team has sent us the new interface that needs to be implemented. As you can see, there are several steps to register the user.
            </p>
            <ul>
              <li>
              <p>You will need to create a registration form, step by step, in which the application asks the user for the following information:</p>
              </li>
              <ul>
                <li>
                Step 1:
                </li>
                <ul><li  type="square">Welcome, you only have to have a button to start the process.</li></ul>
                <li>
                Step 2:
                </li>
                <ul><li  type="square">First and Last name</li></ul>
                <li>
                Step 3:
                </li>
                <ul>
                  <li  type="square">Address: It is a field that allows you to search and list the different buildings that we have in our database, these can be consulted by name, city, address, zip code, state.</li>
                  <li  type="square">Apt number</li>
                </ul>
                <li>
                Step 4:
                </li>
                <ul><li  type="square">Select the TV plan</li></ul>
                <li>
                Step 5:
                </li>
                <ul>
                  <li  type="square">Email</li>
                  <li  type="square">Phone number</li>
                </ul>
                <li>
                Step 6:
                </li>
                <ul>
                <li  type="square">Thank you page</li>
                </ul>
              </ul>
            </ul>
            <p>Here you could see the design of this process:</p>
          </div>
          <div className='imgs'>
            <div className='item-img'><img src={theBestTvServiceAround} alt="the Best Tv Service Around" /></div>
            <div className='item-img'><img src={AwesomeLetIsGetStartedWithTheBasics} alt="Let Is Get Started With The Basics" /></div>
            <div className='item-img'><img src={PleasureToMeetYouCristianWhatIsYourInstallAddress} alt="Pleasure To Meet You Cristian What Is Your Install Address" /></div>
            <div className='item-img'><img src={Selected} alt="Selected" /></div>
            <div className='item-img'><img src={SelectedOneOption} alt="Selected One Option" /></div>
            <div className='item-img'><img src={PleaseSelectTvPlanYouWantToEnjoy} alt="Please Select Tv Plan You Want To Enjoy" /></div>
            <div className='item-img'><img src={GreatNewsYourFirstMonthIsFree} alt="Great News Your First Month Is Free" /></div>
          </div>
          </div>
          <div>
               
       <div>
       <div className='titles'>
            <div> <h2>Technical Requirements</h2></div>
            <div className='line'/>
        </div>
          <div>
          <p>
          Their Tech Lead has no time to implement that, but she has defined some technical constraints:
          </p>
         <ul>
          <li>
          This webapp has to be develop using React y Node.js
          </li>
          <li>
          Create an API to search the information of the buildings and register the customers information
          </li>
          <li>
          Create reusable components
          </li>
          <li>
          Create a clean, maintainable and well-designed code
          </li>
          <li>
          Test your code until you are comfortable with that
          </li>
         </ul>
        </div>
       </div>

      <div>
             
      <div className='titles'>
            <div> <h2>Technologies</h2></div>
            <div className='line'/>
        </div>
        <div>
          <p>
          There are some restrictions on the technology to be used:
          </p>
        <ul>
          <li>Structure the app as a Single Page web Application, React.</li>
          <ul><li type="circle">Bonus points: Use redux or context</li></ul>
          <li>We prefer MongoDB to be the database (you can <a href='https://www.mongodb.com/es/cloud/atlas/register'>create a free account here</a>), but you can use another one if you want.</li>
          <li>Use SCSS or SASS to manage your stylesheets</li>
        </ul>
        </div>
      </div>

           
        <div>
        <div className='titles'>
            <div> <h2>Considerations</h2></div>
            <div className='line'/>
        </div>
        <div>
         <ul>
          <li>To obtain the data of the buildings, you must create an API in Node.js that returns the information of <a href='https://github.com/sktvera/MegaTeleServices/blob/main/assets/buildings.json'>this file</a>, when searching for any of its fields (name, address, state, city, etc).</li>
          <li>We are looking for a Mobile First design</li>
          <li>Pay attention to the design</li>
          <li>The backend app exposes a REST API that is the way in which the frontend app communicates with the backend</li>
          <li>The backend app is separated into layers, modules(e.g., Controllers, Models, etc). We prefer the <a href='https://alexkondov.com/tao-of-node/#structure-in-modules'>domain folder</a> structure</li>
          <li>The whole project must be in the same repository and will contain the react application inside the client folder and the backend in the server folder</li>
         </ul>
          <p>
          To understand how you take decisions during the implementation, please write a README file explaining some of the most important parts of the application.
          </p>
        </div>
        </div>

           
       <div>
       <div className='titles'>
            <div> <h2>How to submit your solution</h2></div>
            <div className='line'/>
        </div>
        <div>
          <ul>
            <li>Push your code to the devel branch - we encourage you to commit regularly to show your thinking process was.</li>
            <li>Create a new Pull Request to main branch & merge it.</li>
          </ul>
          <p>
          Once merged you won't be able to change or add anything to your solution, so double-check that everything is as you expected!
          </p>
          <p>
          Remember that there is no countdown, so take your time and implement a solution that you are proud!
          </p>
        </div>
       </div>


          </div>
  

      </div>
     </div>
    )

}

export default EnterprisBody
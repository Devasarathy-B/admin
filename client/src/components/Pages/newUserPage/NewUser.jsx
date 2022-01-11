import './newUser.css'

export default function NewUser() {
    return (
        <div className='newUser'>
             <h1 className="newUserTitle">New User</h1>
             <form  className="newUserForm">
                 <div className="newUserItems">
                     <label >Username</label>
                     <input type="text" placeholder='john' />
                 </div>
                 <div className="newUserItems">
                     <label >Fullname</label>
                     <input type="text" placeholder='John Marvik' />
                 </div>
                 <div className="newUserItems">
                     <label >Email</label>
                     <input type="email" placeholder='john@gmail.com' />
                 </div>
                 <div className="newUserItems">
                     <label >Password</label>
                     <input type="password" placeholder='****' />
                 </div>
                 <div className="newUserItems">
                     <label >Phone</label>
                     <input type="text" placeholder='+91 98765 43210' />
                 </div>
                 <div className="newUserItems">
                     <label >Address</label>
                     <input type="text" placeholder='Nagpur | Rajasthan' />
                 </div>
                 <div className="newUserItems">
                     <label >Gender</label>
                     <div className="newUserGender">
                     <input type="radio" name='gender' id='male' value='male' />
                     <label for='Male'>Male</label>
                     <input type="radio" name='gender' id='female' value='female' />
                     <label for='Female'>Female</label>
                     <input type="radio" name='gender' id='others' value='others' />
                     <label for='Others'>Others</label>
                     </div>
                 </div>
                 <div className="newUserItems">
                     <label >Active</label>
                     <select name="active" id="active" className='newUserSelect'>
                         <option value='yes'>Yes</option>
                         <option value='no'>No</option>
                     </select>
                 </div>
                 <button className="newUserButton">Create</button>
             </form>
        </div>
    )
}

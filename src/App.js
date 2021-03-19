import React, { Component,Fragment } from 'react';
import './App.css';
import AddContact from './components/addcontact/addcontact';
import ContactItem  from './components/contact-item/contact-item';
import ContactList from './components/contact-list/contact-list';
import NotesList from './components/notes-list/notes-list';
import NavBar from './components/navbar/navbar';
import Notes from './components/notes/notes';

class App extends Component {

    state = {
         contacts: [
          { 
               name: "Andri",
               number: "897124214",
               image:  63,
               gender: "men",
          },
          { 
               name: "Vetal",
               number: "796324214",
               image:  31,
               gender: "men",
          },
          { 
               name: "Vika",
               number: "597124214",
               image:  78,
               gender: "women",
          },
         ],

         notList: [
           {
                title: "Web layout",
                description: "Layout by blocks"
           },
           {
                title: "Web Js",
                description: "JavaScript Fremworks "
           },
           {
               title: "TT JS",
               description: "React start "
           },
           {
               title: "Start PHP",
               description: "HELP!!! "
          }
          ]
    }
    
   addContact = (newContact) => {
        var tempContact = [];
        if(this.state.contacts != null) {
             tempContact = this.state.contacts.slice();
        }
        tempContact.push(newContact);

        this.setState({
           contacts: tempContact
     })
        console.log(this.state)
   }

  render() {
    return(

       <Fragment>
            <NavBar></NavBar>
            <div className="container-fluid">

            <div className="row">
        
               <div className="col-lg-2 col-md-3 col-sm-12 col-12 ">
                    <AddContact  addContact={this.addContact}></AddContact>
               </div>
               <div className="col-lg-10 col-md-9 col-sm-12 col-12 row">
                    <ContactList contacts={this.state.contacts}></ContactList>
               </div>
              
            </div>
            <div className="notes-carts"> 
                   <NotesList notList={this.state.notList}></NotesList>
              </div>
               {/* <div className=" notes-cart">
                    <NotesList notList={this.state.notList}></NotesList>
               </div>   */}
            </div>

       </Fragment>
           
     
       
        
    )
  }


}



export default App;

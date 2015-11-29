Players = new Mongo.Collection("players");
Lineups = new Mongo.Collection("lineups");

 //**********packages insecure (crud from main methods) and autopublish (find called by all users) need to be removed before ever publishing app
if (Meteor.isClient) {

  Meteor.subscribe("lineups");
  // This code only runs on the client
  // Template.body.helpers({
  //   tasks: function () {
  //     if (Session.get("hideCompleted")) {
  //       // If hide completed is checked, filter tasks
  //       return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
  //     } else {
  //       // Otherwise, return all of the tasks
  //       return Tasks.find({},{sort: {createdAt: -1}});
  //     }
  //   },
  //   hideCompleted: function () {
  //     return Session.get("hideCompleted");
  //   },
  //   incompleteCount: function () {
  //     return Tasks.find({checked: {$ne: true}}).count();
  //   }
  // });
  // Template.body.events({
  //   "submit .new-task": function (event) {
  //     // Prevent default browser form submit
  //     event.preventDefault();
 
  //     // Get value from form element
  //     var text = event.target.text.value;
 
  //     // Insert a task into the collection
  //     Meteor.call("addTask", text);
 
  //     // Clear form
  //     event.target.text.value = "";
  //   },
  //   "change .hide-completed input": function (event) {
  //     Session.set("hideCompleted", event.target.checked);
  //   }
  // });
  Template.body.helpers({
    lineups: function (){
      //verify user is validated
      //if validated display all lineups

      //if not validated give option to create new lineups but implore to create account to store
    }
  });

  Template.Lineups.events({
    'blur QB': function(){
      Meteor.call("insertPlayer",this._id,'QB','1');
    },
    'click New': function(){
      //validate that the user is logged in

      //pass to insert method that creates a document with dummy fields for all positions
    },
    'click Edit': function(){

    }
  });

  Template.lineup.helpers({
    isOwner: function () {
      return this.owner === Meteor.userId();
    }
  });

//   Template.task.events({
//     "click .toggle-checked": function () {
//       // Set the checked property to the opposite of its current value
//       Meteor.call("setChecked", this._id, ! this.checked);
//     },
//     "click .delete": function () {
//       Meteor.call("deleteTask", this._id);
//     },
//     "click .toggle-private": function () {
//       Meteor.call("setPrivate", this._id, ! this.private);
//     }
//   });

 }
// Meteor.methods({
//   insertPlayer: function (playerID, playerPos, playerOrder) {
//   	var player = Players.findOne(playerID);

  	
//   }
// });

//   // addTask: function (text) {
//   //   // Make sure the user is logged in before inserting a task
//   //   if (! Meteor.userId()) {
//   //     throw new Meteor.Error("not-authorized");
//   //   }
 
//   //   Tasks.insert({
//   //     text: text,
//   //     createdAt: new Date(),
//   //     owner: Meteor.userId(),
//   //     ownerEmail: Meteor.user().emails[0].address
//   //   });
//   // },
//   // deleteTask: function (taskId) {
//   //   var task = Tasks.findOne(taskId);
//   //   if (task.private && task.owner !== Meteor.userId()) {
//   //     // If the task is private, make sure only the owner can delete it
//   //     throw new Meteor.Error("not-authorized");
//   //   }
 
//   //   Tasks.remove(taskId);
//   // },
//   // setChecked: function (taskId, setChecked) {
//   //   var task = Tasks.findOne(taskId);
//   //   if (task.private && task.owner !== Meteor.userId()) {
//   //     // If the task is private, make sure only the owner can check it off
//   //     throw new Meteor.Error("not-authorized");
//   //   }

//   //   Tasks.update(taskId, { $set: { checked: setChecked} });
//   // },
//   // setPrivate: function (taskId, setToPrivate) {
//   //   var task = Tasks.findOne(taskId);
 
//   //   // Make sure only the task owner can make a task private
//   //   if (task.owner !== Meteor.userId()) {
//   //     throw new Meteor.Error("not-authorized");
//   //   }
 
//   //   Tasks.update(taskId, { $set: { private: setToPrivate } });
//   // }
// });
if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish lineups that are public or belong to the current user
  Meteor.publish("lineups", function () {
    return Lineups.find({
        { owner: this.userId }
    });
  });
}
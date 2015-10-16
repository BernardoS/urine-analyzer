if (Meteor.isServer) {
	Meteor.publish("options", function (argument) {
	  return Options.find({});
	});
	Meteor.publish("outputs", function (argument) {
	  return Outputs.find({});
	});
	Meteor.publish("ph", function(argument){
		console.log(argument);
		return SensorCollections.ph.find({},{sort:{date:-1},limit:argument});
	});
	Meteor.publish("na", function(argument){
		return SensorCollections.na.find({},{sort:{date:-1},limit:argument});
	});
	Meteor.publish("k", function(argument){
		return SensorCollections.k.find({},{sort:{date:-1},limit:argument});
	});
	Meteor.publish("cl", function(argument){
		return SensorCollections.cl.find({},{sort:{date:-1},limit:argument});
	});
}

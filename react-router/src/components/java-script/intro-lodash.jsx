import React from 'react';
import _ from 'lodash';

let IntroLodash = React.createClass({

	render(){

		let persons = [
			{ name : 'Bob', height : 195 },
			{ name : 'Stefan', height : 183},
			{ name : 'Charles', height : 153}
		];

		// have got a list of persons and make all persons 5cm smaller
		let personEach = _.each(persons, (person)=>{
			person.height = person.height - 5;
		});
		console.log('List of person & make 5cm smaller', personEach);

		// have got a list of persons and get all their heights
		let personHeights = _.pluck(persons, 'height');
		console.log('List of persons and get all their heights :', personHeights);

		// I have got a list of persons. How can I get the sum of their heights
		let heightsSum = _.reduce(persons, (accumulated,person) => {
			return accumulated + person.height;
		}, 0);
		console.log('Sum of persons heights :', heightsSum);

		//I have got a list of persons. How can I get the biggest height?
		let biggestHeight = _.reduce(persons, (memo, person) => {
			if (memo > person.height) return memo
				return person.height;

		}, 0)
		console.log('The biggest height ',biggestHeight);

		//I have got a list of persons. How can I get all entries where the name is “Bob”
		let personNamedBob = _.where(persons, { name : 'Bob' });
		console.log('Person named Bob :', personNamedBob);

		//  I have got a list of persons. How can I get to know if they are all taller than 1.90m
		let allTallerThan190 = _.every(persons, (person) => {
			return (person.height > 190);
		});
		console.log('All taller than 190 ', allTallerThan190);

		// I have got a list of persons. How can I group and count them depending on their height?
		let groupedAndCountedPersons = _.countBy(persons, (person) => {
			if(person.height >= 180 && person.height < 190) {
				return '180-189';
			}

			if(person.height >= 190 && person.height < 200) {
				return '190-199';
			}

			return 'outOfRange';
		});
		console.log('group and count them depending on their height ', groupedAndCountedPersons);

		//how can I check how many attributes I set for a person
		let personA = {};
		let sizePersonA = _.size(personA);
		console.log('How many attributes I set for a person A', sizePersonA );

		let personB = {
			height : 200
		};
		let sizePersonB = _.size(personB);
		console.log('How many attributes I set for a person b', sizePersonB );

		//More complex use case – the power of chaining
		// I have got a list of persons including their incomes. How can I get the sum of all freelance incomes
		let personsIncomes = [
			{
			    name: 'Bob',
			    incomes: [
			        {
			            type: 'Daily work',
			            value: 2000
			        }, {
			            type: 'Freelance',
			            value: 1000
			        }, {
			            type: 'Freelance',
			            value: 500
			        }
			    ]
			},
			{
			    name: 'Stefan',
			    incomes: [
			        {
			            type: 'Daily Work',
			            value: 750
			        }, {
			            type: 'Freelance',
			            value: 2000
			        }
			    ]
			}
		];

		let freelanceIncomes = _.chain( personsIncomes )
        .pluck( 'incomes' )
        .flatten()
        .where( { type: 'Freelance' } )
        .reduce( function( memo, income ){ return memo + income.value }, 0 )
        .value();

		console.log('How can I get the sum of all freelance incomes ', freelanceIncomes);

		// Loop for N times
		let cont = 0;
		let nTimes = _.times(5,()=>{
			console.log("hola", cont);
			cont ++;
		})

		// Fetch the name of the first pet from each owner
		let ownerArr = [
			{
				"owner": "Colin",
		    	"pets": [
					{"name":"dog1"},
					 {"name": "dog2"}
				 ]
			},
			{
		    	"owner": "John",
		    	"pets": [
					{"name":"dog3"},
					 {"name": "dog4"}
				 ]
			}
		];

		// Array`s map method
		let useMap = ownerArr.map((owner) =>{
			return owner.pets[0].name;
		});
		console.log('Owner use Map', useMap);

		// Array`s lodash method
		// Two of the same kind
		// _.pulck(ownerArr, 'pets[0].name');
		let useLodash = _.map(ownerArr, 'pets[0].name');
		console.log('Owner use Lodash ',useLodash);

		return (
			<div>
				<h3>Introducción a lodash</h3>
				<p>Es necesario abrir la consola (cmd + alt + j)</p>
			</div>
		)
	}

});

export default IntroLodash;

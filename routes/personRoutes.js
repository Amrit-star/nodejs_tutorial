const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

//POST route to add a person
router.post('/', async (req, res) => {
    try {
        const newPersonData = req.body;
        // create a new Person document using the Mongoose model
        const newPerson = new Person(newPersonData);

        // Save the new person to the database using await
        const savedPerson = await newPerson.save();
        console.log('Saved person to database');
        res.status(201).json(savedPerson);

    } catch (error) {
        console.error('Error saving person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    try {
        // Use the Mongoose model to fetch all persons from the
        const persons = await Person.find();
        console.log('data fetched');
        res.status(201).json(persons);
        // Send the list of persons as a JSON response
        res.json(persons);
    } catch (error) {
        console.error('Error fetching persons:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/:workType', async (req, res) => {
    try{
        const workType = req.params.workType; // Extract the work type from the URL parameter
        // Assuming you already have a Person model and MongoDB connection set up
        if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
            const response = await Person.find({ work: workType });
            // Send the list of persons with the specified work type as a JSON response
            console.log('response fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error : 'Invalid work type'})
        }
        
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})



// put method to update
router.put('/:id', async(req, res)=>{
    try{
        const personId=req.params.id; // extract the id from the URL parameter
        const updatedPersonData = req.body; //Updated data for the person

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, // return the updated document
            runValidators: true, // Run Mongoose validation
        })

        if(!response){
            return res.status(404).json({ error: 'Person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

// delete method 
router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // Extract the person's ID from the URL parameter
        // Assuming you have a Person model
        const deletedPerson = await Person.findByIdAndDelete(personId);

        if (!deletedPerson) {
        return res.status(404).json({ error: 'Person not found' });
        }
        // Send a success message as a JSON response
        res.status(200).json({ message: 'Person deleted successfully'});
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

// comment added for testing
module.exports = router;
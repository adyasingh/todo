import React from 'react';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useState, useEffect } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Button, IconButton } from '@material-ui/core';


export default function List() {
    const [list, setList] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [newTask, setNewTask] = React.useState('');

    useEffect(() => {

        getList();

    }, []);

    //get list of todo tasks
    const getList = () => {

        fetch("http://127.0.0.1:8000/api/todos/")
            .then(response => response.json())
            .then(data =>
                setList(data),


            )
            .catch(error => console.log(error));

    }

    //render table with tasks
    const getTable = () => {
        console.log(list)
        return (
            <Table >
                <TableHead>
                    <TableRow>
                    {/* <TableCell style={{ color: "white" }} >id</TableCell> */}
                        <TableCell style={{ color: "white" }} >Completed</TableCell>
                        <TableCell style={{ color: "white" }}>Task</TableCell>
                        <TableCell style={{ color: "white" }}>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((row) => (
                        <TableRow key={row.id}>
                             {/* <TableCell style={{ color: "white" }}>{row.id}</TableCell> */}

                            <TableCell>{row.completed}
                                <FormControlLabel control={<Checkbox style={{ color: "white" }} name="checkedC" />} />
                            </TableCell>

                            <TableCell style={{ color: "white" }}>{row.item}</TableCell>
                            <TableCell >
                                <IconButton style={{ color: "white" }}  onClick={() => handleDelete(row.id)}>
                                    <DeleteIcon />
                                </IconButton>

                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }


    function handleDelete(id) {
        // console.log("http://127.0.0.1:8000/api/todos/" + id)
        fetch("http://127.0.0.1:8000/api/todos/" + id+'/', {
          method: 'delete',
        //   headers: { 'Content-Type': 'application/json' },
        })
        
        // .then(response => response.json())
        .then(response => {
            console.log(response)
            getList()
          
        });

    }


    //open dialog box
    const handleOpen = () => {
        setOpen(true);
        setNewTask('')
    };

    //close dialog box
    const handleClose = () => {
        setOpen(false);
        setNewTask('')
    };
    const handleTaskChange = (e) => {
        setNewTask(e.target.value)
    };
    
    //add new task to the database 
    const handleAdd = () => {
        handleClose()
        setNewTask('')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ item: newTask })
        };
        fetch('http://127.0.0.1:8000/api/todos/', requestOptions)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                getList()
            });

        
    };

 
    return (
        <div style={{ backgroundColor: "#282c34", color: "white" }}>

            <header style={{ marginLeft: "1.3vw", justifyContent: "left", display: "flex" }}>
                <h3>To-Do List</h3>
                <IconButton style={{ color: "white" }} onClick={handleOpen}>
                    <AddCircleIcon />
                </IconButton>
            </header>

            {getTable()}

            <Dialog open={open} fullWidth={true} aria-labelledby="form-dialog-title" >
                <DialogTitle id="form-dialog-title">Add New Task</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="task"
                        label="Task"
                        onChange={handleTaskChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>


        </div>

    );
}


import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, Divider, TextField } from '@mui/material';
import { color } from 'framer-motion';

export const Upload = () => {
    const handleItemClick = (item) => {
        console.log(`Clicked on "${item}"`);
        // Perform any other actions on item click
    };

    return (
        <Box sx={{ margin: '70px', display: 'flex', justifyContent: 'space-evenly' }}>
            <Box
                sx={{
                    width: '20%',
                    bgcolor: 'background.paper',
                }}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton onClick={() => handleItemClick('Plan your course')}>
                        <ListItemText primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }} primary="Plan your course" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Intended learners')}>
                        <ListItemText primary="Intended learners" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Course structure')}>
                        <ListItemText primary="Course structure" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Setup & test video')}>
                        <ListItemText primary="Setup & test video" />
                    </ListItemButton>
                </List>

                <List component="nav" aria-label="secondary mailbox folder">
                    <ListItemButton onClick={() => handleItemClick('Create your content')}>
                        <ListItemText primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }} primary="Create your content" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Film & edit')}>
                        <ListItemText primary="Film & edit" />
                    </ListItemButton>

                    <ListItemButton onClick={() => handleItemClick('Curriculum')}>
                        <ListItemText primary="Curriculum" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Captions (optional)')}>
                        <ListItemText primary="Captions (optional)" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Accessibility (optional)')}>
                        <ListItemText primary="Accessibility (optional)" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Publish your course')}>
                        <ListItemText primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }} primary="Publish your course" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Course landing page')}>
                        <ListItemText primary="Course landing page" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Pricing')}>
                        <ListItemText primary="Pricing" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Promotions')}>
                        <ListItemText primary="Promotions" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Course messages')}>
                        <ListItemText primary="Course messages" />
                    </ListItemButton>
                </List>
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: 'rgb(164, 53, 240)',
                        borderRadius: '0px',
                        fontSize: '1.01rem', // Increase the font size
                        marginLeft: '-80px', // Decrease the margin
                        '&:hover': {
                            bgcolor: 'rgb(124, 33, 200)',
                        },
                    }}
                >
                    Submit For Review
                </Button>
            </Box>

            <Box
                sx={{

                    bgcolor: 'background.paper',
                    padding: '450px',
                    paddingBottom: '400px',
                    border: '0.2px solid',
                    borderColor: 'white',
                    position: 'relative',
                    boxShadow: '0px 4px 8px rgba(128, 128, 128, 1)',

                }}
            >
                <h3 style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    padding: '10px',
                    fontSize: '25px',
                    fontFamily: 'times',
                    fontWeight: 'bold'
                }}>Intended Content</h3>
                <Divider
                    sx={{
                        width: '80%',
                        margin: '20px auto',
                        color: 'black' // Adjust margin as needed
                    }}
                />
                <Box sx={{
                    position: 'absolute',
                    top: '100px',
                    left: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '800px',
                    textWrap: 'wrap'
                }}>
                   
                    <div>
                        <p className=" text-left">The following descriptions will be publicly visible on your Course Landing Page and will have a direct impact on your course performance. These descriptions will help learners decide if your course is right for them.</p>
                        <h4 className=" text-left top-30 left-20  font-bold font-serif mt-12 mb-2">What will students learn in your course?</h4>
                        <p className="text-left mb-4">You must enter at least 4 learning objectives or outcomes that learners can expect to achieve after completing your course.</p>
                        <form>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="  Example: Roles and Responsibilities of a Project Manager"
                                    className="border border-black-300 p-2 w-full mb-5"
                                />
                            </div>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="  Example: Estimate Project Timelines and Budgets"
                                    className="border border-black-300 p-2 w-full mb-5"
                                />
                            </div>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="  Example: Identify and Manage Project Risks"
                                    className="border border-black-300 p-2 w-full mb-5"
                                />
                            </div>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="  Example: Complete a Case Study to Manage a Project from Conception to Completion"
                                    className="border border-black-300 p-2 w-full mb-5"
                                />
                            </div>
                        </form>
                    </div>
                    <div>
                        <h4 className="text-left top-30 left-20 font-bold font-serif mb-2 mt-4">What are the requirements or prerequisites for taking your course?</h4>
                        <p className="text-left mb-4">List the required skills, experience, tools or equipment learners should have prior to taking your course.
                            If there are no requirements, use this space as an opportunity to lower the barrier for beginners.</p>
                        <input
                            type="text"
                            placeholder="  Example: No programming experience needed. You will learn everything you need to know."
                            className="border border-black-300 p-2 w-full mb-5"
                        />
                    </div>
                    <div>
                        <h4 className="text-left top-30 left-20 font-bold font-serif mb-4">Who is this course for?</h4>
                        <p className="text-left">Write a clear description of the intended learners for your course who will find your course content valuable.
                            This will help you attract the right learners to your course.</p>
                        <input
                            type="text"
                            placeholder="  Example: No programming experience needed. You will learn everything you need to know."
                            className="mb-8 border border-black-300 p-2 w-full mb-5"
                        />
                    </div>
                </Box>
                {/* Content of the second box */}
            </Box>

        </Box >
    );
};
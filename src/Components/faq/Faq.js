/** @format */

import React, { useState, useEffect } from 'react';
import useStyles from './faqStyles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import axios from 'axios';

export default function Test() {
  const classes = useStyles();
  const [faqsData, setFaqsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = useState(false);

  //const [isLoaded, setIsLoaded] = useState(false);

  const url =
    'https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab';
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(url);

      const allQuestionsData = await request.data.scholarship.faqs.items;
      setFaqsData(allQuestionsData);

      const allCategories = await request.data.scholarship.faqs.categories;
      setCategories(allCategories);

      const categorySelected = await request.data.scholarship.faqs
        .categories[0];
      setSelectedCategory(categorySelected);

      return request;
    };

    fetchData();
  }, []);

  const handleExpansionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleMenuChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  const handleMenuOpen = () => {
    setOpen(true);
  };

  const categoriesFilterList = categories ? (
    categories.map((cat, index) => {
      return (
        <MenuItem key={index} value={cat}>
          <span className={classes.filterText}>{cat}</span>
        </MenuItem>
      );
    })
  ) : (
    <div>Please wait</div>
  );

  const filteredQuestions = faqsData.filter(
    (question) => question.type === selectedCategory
  );

  const displayedFaqs = filteredQuestions.map((questionToDisplay, index) => {
    return (
      <Accordion
        key={index}
        expanded={expanded === `panel${index + 1}`}
        onChange={handleExpansionChange(`panel${index + 1}`)}>
        <AccordionSummary
          expandIcon={!expanded ? <AddCircleIcon /> : <RemoveCircleIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'>
          <Typography className={classes.category}>
            {questionToDisplay.type}
          </Typography>
          <Typography className={classes.question}>
            {questionToDisplay.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{questionToDisplay.answer[0].data}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  });

  return (
    <div className={classes.root}>
      <div className={classes.headerDev}>
        <h2 className={classes.title}>Frequently asked questions</h2>
        <FormControl>
          <div className={classes.formControl}>
            <h4 className={classes.filterLabel}>Filter By:</h4>
            <Select
              open={open}
              onClose={handleMenuClose}
              onOpen={handleMenuOpen}
              value={selectedCategory}
              onChange={handleMenuChange}
              className={classes.filter}>
              {categoriesFilterList}
            </Select>
          </div>
        </FormControl>
      </div>

      <div className={classes.questionsDev}>{displayedFaqs}</div>
    </div>
  );
}

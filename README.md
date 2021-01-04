# Wine-Reviews
## Madison Stehle (5:25pm - 9:25pm)


### Application Links
- [Deployed Site](https://wine-reviews.netlify.app/)
- [Github Respository](https://github.com/madisonstehle/wine-reviews)


### With More Time...

If given longer to implement this application, I would:

1. Complete the "filter by countries of origin" feature. The current drop down (commented out in the code) has no functionality aside from displaying a list of countries associated with the listed wine reviews. I would likely need to deduplicate the country list. Judging by the wireframe, I would also need to do a mathmatical operation to determine the percentage of wines reviewed for each country. Completing this feature would also mean adjusting the "total number of reviews" number.
2. Add a feature to view and filter number of results viewed on the table page, and a pagination feature for the table as displayed in the wireframe. 
3. More effectively style the application. The responsiveness could improve. I would better consolidate the CSS styling into the _styles_ directory, and modularize the parts there. I would also implement a CSS reset file to give a clean baseline to work from. 
4. Allow the submitted form data to persist through reload by using a post route with axios.
5. Clean up the code by modularizing in a more sensical way, add appropriate documentation, and ensure there are no eslint fixes needed.


### Testing

Using Enzyme and Jest, I would verify that the prop functions are being called when events are dispatched and that the renderings of a given state match a snapshot. I would also want to test that a component's children match the expected.

Because our user interface is a priority, I would use snapshot tests on the table, form, and modal, specifically, to make sure that the layout stays consistent and doesn't change unexpectedly with a change in state or screen size.

Unit tests could be performed on the functions making api calls, changing the state, sorting the table data, and handling the form data to ensure that these functions behave as we expect. It would be good to feed edge cases (such as non-normalized data, empty fields, etc.) into these unit tests to make sure that the data is being handled.

Component tests are still valuable here, even given that it is a single-page application. I would use a component test to check that the form and the table are working together, and that the "total number of reviews" data from the header would be feeding from the numbers in the table.


### Credits
- [Sorting Table Data Hook](https://www.smashingmagazine.com/2020/03/sortable-tables-react/) by Kristofer Selbekk 
- [React Modal](https://dev.to/adeyemiadekore2/how-to-build-a-reusable-and-responsive-modal-in-react-from-scratch-1o0f) by korey
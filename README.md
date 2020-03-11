# Simple Gallery

A simple gallery web app that displays a list of albums/photos. (3/2020)

Technology Stack:

React, Redux

- Display the list of albums of size 25 (the first 25 albums from the API) 

- Every album should display its ID, name and the number of photos that are in the album’s photo area

- Every album should come with a expand/collapse toggle to display the photos

- Upon clicking on the album’s expand toggle, only the LATEST first 12 photo thumbnails should be displayed in the album’s  photos area (can ignore the user’s removed photos) and the number of photos info should be updated 

- Upon clicking on the album’s collapse toggle, the album’s photos area should be hidden

- Every album should display the photos in a grid of 3 rows with 4 photo thumbnails in each row, strictly notable component, only pure CSS is allowed

- Every photo thumbnail should come with an `x` button at the top right corner 1

- Upon clicking on the photo thumbnail’s `x` button, the photo thumbnail should be removed from the album’s photos area, the remaining photo thumbnails should be rearranged to fill up the empty space and the number of photos info should be updated

- Upon hovering over the photo thumbnail, users should see the photo’s title

- Upon clicking on the photo thumbnail, users should see a modal containing the full-size photo and the modal should be dismissable by an `x` button that resides in it

- On the home page the NFT cards are different sizes, can you fix this? The design team has set a maximum width of 450 pixels for the card, but on mobile devices it may be smaller depending on the screen size.

- Users can not tell that the cards are actually clickable. Can we fix this with the right cursor?

- When the user clicks on one of the collection cards on the home page, they should be redirected to the collections page where they can see all the collections available on the website

- Under pages/Collections.tsx you will find 2 variables, apirUrl and apiCallBody. Use these to make an API call and get the NFT list of collections from the Flowty API. The cards have the same design as the collection cards on the start page.

- When clicking on a card, the user should be directed to a new dynamic route called collection/{collectionName}. On this page we only want to display the collection name with the best tag to improve SEO.
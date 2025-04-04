# 101444170-lab-test2-comp3133

## Author
Nazneen Akter Nitu  
Student ID: 101444170

## Description
This is a standalone Angular 17+ application developed for COMP 3133 - Lab Test 2 at George Brown College.

The application fetches and displays a list of **Harry Potter characters** using the [Harry Potter API](https://hp-api.onrender.com/api/characters). It showcases component-based architecture and API integration using Angular's standalone approach.

## Features 
- Angular 17 standalone component structure
- Fetches characters from a public REST API
- Displays character name, house, and image
- Implements dropdown filter to search characters by house
- Uses `HttpClient` for HTTP requests
- Implements `*ngIf` and `*ngFor` for conditional rendering and lists
- Responsive layout with CSS Grid for character display
- Fully deployed on Vercel 
- View character details when clicked
- Error handling for loading characters
- Custom event emitters for passing data between components

## Demo 
Live site: [https://101444170-lab-test2-comp3133.vercel.app](https://101444170-lab-test2-comp3133.vercel.app)

## Tech Stack 
- Angular 17+
- TypeScript
- HTML/CSS
- Vercel (Hosting)
- Harry Potter API

## Getting Started

### Prerequisites
- Node.js
- Angular CLI

### Steps to run the project locally:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/101444170-lab-test2-comp3133.git
   cd 101444170-lab-test2-comp3133

###
/src
  /app
    /characterlist
      characterlist.component.ts
      characterlist.component.html
      characterlist.component.css
    /characterdetails
      characterdetails.component.ts
      characterdetails.component.html
      characterdetails.component.css
    /character.service.ts
    /character.model.ts
    app.component.ts
    app.component.html
    app.component.css

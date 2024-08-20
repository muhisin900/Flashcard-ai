# AI Flashcards

AI Flashcards is a web application that generates personalized flashcards based on user-inputted text, helping users to study more efficiently. The application includes features like user authentication, premium subscription options, and the ability to save and manage flashcards.

## Features

- **AI-Generated Flashcards**: Automatically generate study materials based on the text provided by the user.
- **User Authentication**: Secure sign-in and sign-up using Clerk and Firebase.
- **Save and Manage Flashcards**: Users can save their flashcards and access them later.
- **Premium Subscription**: Access to advanced features via a premium subscription, with payment processing handled by Stripe.
- **Responsive Design**: Fully responsive and designed with Material UI for an optimal user experience across devices.

## Tech Stack

- **Frontend**: Next.js, React, Material UI
- **Backend**: Firebase
- **AI Integration**: OpenAI API
- **Authentication**: Clerk, Firebase Auth
- **Payment Processing**: Stripe API
- **Deployment**: Vercel

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/ai-flashcards.git
   cd ai-flashcards
2. **Install dependencies:**
    Copy code
    ```npm install
3. **Set up environment variables:**
    Create a .env.local file in the root directory and add your API keys and configuration settings:
    NEXT_PUBLIC_OPENAI_API_KEY=your-openai-api-key
    NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-stripe-public-key
    NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api
    NEXT_PUBLIC_CLERK_API_KEY=your-clerk-api-key

3. **Run the development server:**
    npm run dev
    Open http://localhost:3000 to view the application in your browser.
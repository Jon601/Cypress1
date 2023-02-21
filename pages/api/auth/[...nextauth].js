import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { FirestoreAdapter } from "@next-auth/firebase-adapter"
import { db } from "../../../firebase";

export default NextAuth ({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  adapter: FirestoreAdapter({
    apiKey: "AIzaSyDJJWVuJjFsJFOqSukRknvISKx4vW_Le_w",
    authDomain: "cypress-88.firebaseapp.com",
    projectId: "cypress-88",
    storageBucket: "cypress-88.appspot.com",
    messagingSenderId: "558894438561",
    appId: "1:558894438561:web:55abcc33b7c80387d5b8e0",
    measurementId: "G-37JNP4NRJ2",
    emulator: {
      host: 'localhost',
      port: 3000
    }
  }),
  
});
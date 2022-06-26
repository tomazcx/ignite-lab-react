
import { Router } from "./Router"
import { Event } from "./pages/Event"
import { ApolloProvider } from "@apollo/client"
import { client } from "./lib/apollo"
import { BrowserRouter } from "react-router-dom"
import { useEffect } from "react"



export const App = () => {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>


  )
}

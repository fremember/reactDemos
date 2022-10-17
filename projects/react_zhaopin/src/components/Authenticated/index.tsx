import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Nav } from 'components'
import { Job, Has, Message, MessageDetail, User } from 'pages'


export const Authenticated: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Nav /> }>
                    <Route index element={ <Job /> } />
                    <Route path='job' element={ <Job /> } />
                    <Route path='has' element={ <Has /> } />
                    <Route path='message' element={ <Message /> } />
                    <Route path='user' element={ <User /> } />

                    <Route path="*" element={
                        <main style={{ color: '#f00' }}>
                            <p>There is nothing here !</p>
                        </main>
                    } />
                </Route>
                <Route path='/messageDetail/:toId' element={ <MessageDetail /> } />
            </Routes>
        </BrowserRouter>
    )
}

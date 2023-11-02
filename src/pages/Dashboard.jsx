import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <div className="bg-slate-300 flex ">
                <aside className='w-1/4 bg-slate-950 text-white border'>
                  <p><Link to=''>Add Products</Link> </p>
                  <p><Link to='products'>Products</Link> </p>
                  <p><Link to='jkjk'>Products Overview</Link> </p>
                </aside>
                <section className='w-3/4 bg-slate-200 text-slate-900'>
                    <Outlet />
                </section>

            </div>
        </div>
    )
}

export default Dashboard
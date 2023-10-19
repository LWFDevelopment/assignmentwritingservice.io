import React from 'react'

export default function Tabs() {
  return (
    <div className="section">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="section-heading heading-center">
                    <h1>Content Section</h1>
                </div>
                <div className="tabs">
                    <ul className="tabs-nav">
                        <li className="active">Service 1</li>
                        <li>Service 2</li>
                        <li>Service 3</li>
                        <li>Service 4</li>
                    </ul>
                    <div className="tabs-container">
                        <div className="tabs-item content active">
                            <p>Learning to program means learning how to solve problems using code. Conceptually it
                                is not very difficult to write a program that solves a problem that you can solve
                                yourself. The skill you need to acquire is thinking very precisely about how you
                                solve the problem and breaking it down into steps that are so simple that a computer
                                can execute them. I encourage you to first solve a few instances of a problem by
                                hand and think about what you did to find the solution. For example if the task is
                                sorting lists, sort some short lists yourself.</p>
                        </div>
                        <div className="tabs-item content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptates
                                reiciendis quaerat ut natus dignissimos distinctio perferendis commodi odit impedit
                                rerum totam, saepe corporis perspiciatis non, nam amet maxime sunt.</p>
                        </div>
                        <div className="tabs-item content">
                            <p>A reasonable method would be to find the smallest element, write it down and cross it
                                out of the original list and repeat this process until you have sorted the whole
                                list. Then you have to teach the computer 1) how to find the smallest element, 2)
                                how to write it down, 3) how to cross it out, and wrap this in a loop. Then continue
                                this task breakdown process until you’re confident you know how to write the
                                necessary program.</p>
                        </div>
                        <div className="tabs-item content">
                            <p>Learning to program means learning how to solve problems using code. Conceptually it
                                is not very difficult to write a program that solves a problem that you can solve
                                yourself. The skill you need to acquire is thinking very precisely about how you
                                solve the problem and breaking it down into steps that are so simple that a computer
                                can execute them. I encourage you to first solve a few instances of a problem by
                                hand and think about what you did to find the solution. For example if the task is
                                sorting lists, sort some short lists yourself.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

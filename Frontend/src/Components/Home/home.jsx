import React from 'react';

import './home.css';

const home = () => {
    return (
        <>
            <div className="home-container">
                <span className="title-add-todo">Add To-Do</span>
                <label htmlFor="add-todo" className="label-add-todo">Add new to-do:</label>
                <input
                    type="text"
                    name="add-todo"
                    id="add-todo"
                    placeholder="Add to-do"
                    className="txt-add-todo"
                />
                <button className="btn-add-todo">Add</button>
            </div>
            <div className="home-container">
                <span className="title-add-todo">Your To-Dos</span>
                <table className="todos-table">
                    <thead>
                        <tr>
                            <th className="td-th-center">#</th>
                            <th>Todo</th>
                            <th className="td-th-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="td-th-center">1</td>
                            <td>Lorem sjhgdghj djhghjds hdshgdvs j.</td>
                            <td className="td-th-center">
                                <button className="btn-todo-action">Edit</button>
                                <button className="btn-todo-action">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="td-th-center">1</td>
                            <td>Lorem sjhgdghj djhghjds hdshgdvs j.</td>
                            <td className="td-th-center">
                                <button className="btn-todo-action">Edit</button>
                                <button className="btn-todo-action">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="td-th-center">1</td>
                            <td>Lorem sjhgdghj djhghjds hdshgdvs j.</td>
                            <td className="td-th-center">
                                <button className="btn-todo-action">Edit</button>
                                <button className="btn-todo-action">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="td-th-center">1</td>
                            <td>Lorem sjhgdghj djhghjds hdshgdvs j.</td>
                            <td className="td-th-center">
                                <button className="btn-todo-action">Edit</button>
                                <button className="btn-todo-action">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="td-th-center">1</td>
                            <td>Lorem sjhgdghj djhghjds hdshgdvs j.</td>
                            <td className="td-th-center">
                                <button className="btn-todo-action">Edit</button>
                                <button className="btn-todo-action">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="td-th-center">1</td>
                            <td>Lorem sjhgdghj djhghjds hdshgdvs j.</td>
                            <td className="td-th-center">
                                <button className="btn-todo-action">Edit</button>
                                <button className="btn-todo-action">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="td-th-center">1</td>
                            <td>Lorem sjhgdghj djhghjds hdshgdvs j.</td>
                            <td className="td-th-center">
                                <button className="btn-todo-action">Edit</button>
                                <button className="btn-todo-action">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="td-th-center">1</td>
                            <td>Lorem sjhgdghj djhghjds hdshgdvs j.</td>
                            <td className="td-th-center">
                                <button className="btn-todo-action">Edit</button>
                                <button className="btn-todo-action">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="td-th-center">1</td>
                            <td>Lorem sjhgdghj djhghjds hdshgdvs j.</td>
                            <td className="td-th-center">
                                <button className="btn-todo-action">Edit</button>
                                <button className="btn-todo-action">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="td-th-center">1</td>
                            <td>Lorem sjhgdghj djhghjds hdshgdvs j.</td>
                            <td className="td-th-center">
                                <button className="btn-todo-action">Edit</button>
                                <button className="btn-todo-action">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="td-th-center">1</td>
                            <td>Lorem sjhgdghj djhghjds hdshgdvs j.</td>
                            <td className="td-th-center">
                                <button className="btn-todo-action">Edit</button>
                                <button className="btn-todo-action">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="td-th-center">1</td>
                            <td>Lorem sjhgdghj djhghjds hdshgdvs j.</td>
                            <td className="td-th-center">
                                <button className="btn-todo-action">Edit</button>
                                <button className="btn-todo-action">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="td-th-center">1</td>
                            <td>Lorem sjhgdghj djhghjds hdshgdvs j.</td>
                            <td className="td-th-center">
                                <button className="btn-todo-action">Edit</button>
                                <button className="btn-todo-action">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="td-th-center">1</td>
                            <td>Lorem sjhgdghj djhghjds hdshgdvs j.</td>
                            <td className="td-th-center">
                                <button className="btn-todo-action">Edit</button>
                                <button className="btn-todo-action">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="td-th-center">1</td>
                            <td>Lorem sjhgdghj djhghjds hdshgdvs j.</td>
                            <td className="td-th-center">
                                <button className="btn-todo-action">Edit</button>
                                <button className="btn-todo-action">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default home

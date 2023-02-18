import React from 'react';

const Numbers = ({ persons }) => {
    console.log(persons, "prout")
    return (
        <>
            <h2>Numbers</h2>
            <table>
                <tbody>
                    {persons.map(p =>

                        <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>{p.number || "<No Number>"}</td >
                        </tr>

                    )}
                </tbody>
            </table>
        </>
    );
}

export default Numbers;

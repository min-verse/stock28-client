import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import UserResultsList from "../UserResultsList";
import { useDispatch } from "react-redux";
import { clearUser } from "../state/user";

function SearchUsersMainContent() {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [results, setresults] = useState();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem("jwt");
        if (token) {
            fetch(`http://localhost:5000/myportfolio`, {
                headers: {
                    token: token,
                    'Content-Type': 'application/json'
                },
            })
                .then(res => res.json())
                .then((data) => {
                    if (data.length && data.length >= 5) {

                    }
                });
        } else if (!token) {
            dispatch(clearUser());
            navigate("/login");
        }
    }, []);

    function handleChange(e) {
        const newSearch = e.target.value;
        setSearch(newSearch);
    }


    function handleSubmit(e) {
        e.preventDefault();
        let token = localStorage.getItem("jwt");
        if (token) {
            setLoading(true);
            const newSearch = e.target.search.value.toLowerCase();
            fetch("http://localhost:5000/usersearch", {
                method: "POST",
                headers: {
                    token: token,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ friend_search: newSearch })
            }).then(res => res.json())
                .then((data) => {
                    setLoading(false);
                    if (data['error'] && data['error'].includes("No user found")) {
                        alert(data['error']);
                    } else {
                        if (data['error']) {
                            alert(data['error']);
                        } else {
                            setresults(data);
                        }
                    }
                });
        }
    }

    return (<main>
        <h1 className="section-headers" style={{ color: 'white' }}>Search for Users to Follow</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="search-input"
                    type="text"
                    name="search"
                    onChange={handleChange}
                    value={search}
                    placeholder="Search for Stock28 Users"
                    maxLength={5}
                    style={{
                        marginTop: 15,
                        marginRight: 10,
                        marginBottom: 15,
                        width: '65vw',
                        height: '5vh',
                        borderRadius: 20
                    }}
                />
                {loading ?
                    <button
                        className="search-button"
                        type="submit"
                        style={{
                            backgroundColor: 'gray',
                            fontStyle: 'italic',
                            marginTop: 15,
                            marginRight: 15,
                            marginBottom: 15,
                            height: '5vh',
                            borderRadius: 20
                        }}
                        disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...</button> :
                    <button
                        className="search-button"
                        type="submit"
                        style={{
                            marginTop: 15,
                            marginRight: 15,
                            marginBottom: 15,
                            height: '5vh',
                            borderRadius: 20
                        }}
                    >Search</button>}
            </form>
            <Container style={loading ? { height: '75vh', opacity: 0.5 } : { height: '75vh', borderRadius: 10, overflowY: 'auto' }} className="stock-container">
                <Row>
                    {results && results.length && results.length > 0 ?
                        <UserResultsList results={results} />
                        :
                        <h2 style={{ padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="section-headers">Please search for users to follow.</h2>
                    }
                </Row>
            </Container>
        </div>
    </main>);
}

export default SearchUsersMainContent;

// UserDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import '../styles/UserDetails.css';

const UserDetails = ({ user, setUser }) => {
  const { username } = useParams();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/github/user/${username}`, {
          headers: {
            Authorization: `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`,
          },
        });

        console.log('User Data:', response.data); // Log user data

        setUser(response.data);

        const reposResponse = await axios.get(`http://localhost:5000/api/github/repos/${username}`);
        setRepos(reposResponse.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [username, setUser]);

  const latestRepos = repos.slice(0, 5);

  const openGitHubProfile = () => {
    if (user && user.html_url) {
      window.open(user.html_url, '_blank');
    }
  };

  return (
    <div className="user-details-container">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {user && (
            <div className="user-card">
                <h2>{user.login}</h2>
              <h2>{user.name}</h2>
              {user.avatar_url && <img src={user.avatar_url} alt="User Avatar" />}<br></br>
              {user.bio && <p>{user.bio}</p>}<br></br>

              <button className="github-profile-button" onClick={openGitHubProfile}>
                View on GitHub
              </button>
            </div>
          )}

          <div className="repos-container">
            <h3>Latest Repositories</h3>
            <div className="repos-cards">
              {latestRepos.map((repo) => (
                <div key={repo.id} className="repo-card">
                  <h4>
                    <Link to={repo.html_url} target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </Link>
                  </h4>
                  <p>Description: {repo.description}</p>
                  <p>Created At: {repo.created_at}</p>
                  <p>Last Commit Date: {repo.updated_at}</p>

                  {repo.commits && (
                    <div className="commits-section">
                      <h5>Last 5 Commits</h5>
                      <ul>
                        {repo.commits.slice(0, 5).map((commit) => (
                          <li key={commit.sha} className="commit-item">
                            <p>Commit: {commit.sha}</p>
                            <p>Description: {commit.commit.message}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDetails;

import React, { useCallback, useEffect, useState } from 'react';
import './stylesheet.scss';
import GoogleMaps from '../GoogleMaps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { venues } from '../../data/venues';
import { faAward } from '@fortawesome/free-solid-svg-icons/faAward';
import { and, classes } from '../../utils';
import { Link } from 'react-router-dom';

const descendingVotes = (a, b) => b.votes - a.votes;

function Landing() {
  const [activeWeekIndex, setActiveWeekIndex] = useState(0);
  const [voteIndex, setVoteIndex] = useState(-1);
  const [_, setRefresh] = useState(0);
  const [venue, setVenue] = useState(venues[0]);

  const refresh = useCallback(() => setRefresh(Math.random()), []);

  useEffect(() => {
    setVoteIndex(-1);
  }, [activeWeekIndex]);

  useEffect(() => {
    setActiveWeekIndex(0);
  }, [venue]);

  return (
    <div className="Landing">
      <GoogleMaps venues={venues} venue={venue} onClick={setVenue} />
      <div className="logo" />
      <div className="venue-detail">
        <div className="venue">
          <FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth className="icon" />
          <div className="text">
            <div className="name">
              {venue.name}
            </div>
            <div className="address">
              {venue.address}
            </div>
          </div>
        </div>
        <div className="weeks">
          {
            venue.weeks.map((week, i) => activeWeekIndex === i ? (
              <div className="week-detail" key={i}>
                <div className="cover" style={{ backgroundImage: `url(${week.image})` }}
                     onClick={() => setActiveWeekIndex(-1)}>
                  <div className="text">
                    <div className="theme">
                      {week.theme}
                    </div>
                    <div className="dates">
                      {week.dates}
                    </div>
                  </div>
                </div>
                {
                  week.voted && (
                    <div className="voted">
                      Thank you for voting. Final merchants will be posted by next Monday.
                    </div>
                  )
                }
                <div className="stores">
                  {
                    (
                      week.voting
                        ? week.voted
                        ? [...week.stores].sort(descendingVotes)
                        : week.stores
                        : week.stores.slice(0, 3).sort(descendingVotes)
                    ).map((store, j) => (
                      <div className={classes('store', week.voting && !week.voted && 'voting')} key={j}
                           onClick={week.voting && !week.voted ? () => setVoteIndex(j) : undefined}>
                        {
                          week.voting && !week.voted ? (
                            <div className="rank">
                              <div className={classes('vote', voteIndex === j && 'active')} />
                            </div>
                          ) : (
                            <div className="rank">
                              <FontAwesomeIcon icon={faAward} fixedWidth className={classes('icon', `rank-${j}`)} />
                              <div className="votes">
                                {(store.votes / week.stores.reduce((acc, store) => acc + store.votes, 0) * 100).toFixed(1)}%
                              </div>
                            </div>
                          )
                        }
                        <div className="text">
                          <div className="name">
                            {store.name}
                          </div>
                          <div className="description">
                            {store.description}
                          </div>
                        </div>
                      </div>
                    ))
                  }
                  {
                    week.voting && !week.voted && (
                      <button onClick={~voteIndex ? () => {
                        week.voted = true;
                        week.stores[voteIndex].votes++;
                        refresh();
                      } : undefined}>Vote</button>
                    )
                  }
                </div>
              </div>
            ) : (
              <div className="week-summary" key={i} onClick={() => setActiveWeekIndex(i)}>
                <div className="header">
                  <div className="cover" style={{ backgroundImage: `url(${week.image})` }} />
                  <div className="text">
                    <div className="theme">
                      {week.theme}
                    </div>
                    <div className="dates">
                      {week.dates}
                    </div>
                  </div>
                </div>
                {
                  week.voting ? (
                    <div className="stores voting">
                      Vote for the merchants you'd like to see!
                    </div>
                  ) : (
                    <div className="stores">
                      {and(...[...week.stores].sort(descendingVotes).slice(0, 3).map(store => store.name))}
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>
      </div>
      <div className="portal">
        <div className="label">
          Are you an online merchant or retail space owner looking for one another?
        </div>
        <Link to="/join" className="button small">Join Us</Link>
      </div>
    </div>
  );
}

export default Landing;

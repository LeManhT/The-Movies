import React, { useEffect } from 'react'
import "./persondetail.scss"
import PersonOverView from './personOverview/PersonOverView'
import PersonSidebar from './personSidebar/PersonSidebar'
import PersonActing from '../../ui/personActing/PersonActing'
import useFetch from '../../../hooks/useFetch'
import tmdbApi from '../../../api/tmdbApi'
import { useParams } from 'react-router-dom'

const PersonDetail = () => {

  const { info } = useParams();
  const {
    data: dataPerson,
    error: dataErr,
    fetch: getDataPerson
  } = useFetch(tmdbApi.getPersonDetail);

  const {
    data: personDetailCreditData,
    error: personDetailCreditErr,
    fetch: getDetailPersonCredit
  } = useFetch(tmdbApi.getPersonDetailCredits);

  useEffect(() => {
    getDataPerson({ person_id: info });
    getDetailPersonCredit({ person_id: info })
  }, [])


  return (
    <div className="person__detail__wrapper">
      <div className="person__detail__content">
        <div className="person__detail__content__left">
          <PersonSidebar dataPerson={dataPerson} />
        </div>
        <div className="person__detail__content__right">
          <div className="person__detail__overview">
            <PersonOverView personDetailCreditData={personDetailCreditData} dataPerson={dataPerson} />
          </div>

          <div className="person__detail__acting">
            <PersonActing />
          </div>
        </div>
      </div>
    </div>
  )
}


export default PersonDetail;

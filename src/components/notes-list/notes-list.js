import React, { Fragment } from 'react';
import Notes  from '../notes/notes';

const NotesList = ({notList}) => {

    var nontesTemlate;
    if(notList !== null)
      nontesTemlate = notList.map(item => 
        {
            return (
                <Notes
                   title={item.title}
                   description={item.description}
                ></Notes>
            )
        })

        return(
            <Fragment>
                {nontesTemlate}
            </Fragment>
        )
}

export default NotesList;
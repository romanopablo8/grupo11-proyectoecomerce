import React from 'react';
function Movie(props){
return (
<React.Fragment>

<tr>
<th>{props.id}</th>
<th>{props.name}</th>
<th>{props.descripcion}</th>
<th>{props.catecolor[0].category}</th>
<th>{props.detail}</th>
</tr>

</React.Fragment>
)
}
export default Movie;
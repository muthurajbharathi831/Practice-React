import React from 'react'

class Footer extends React.Component {
    constructor (){
        super()

    }

    render(){
        return (
            <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">copyright @ 2021</h5>
    <p class="card-text">This is footer</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        )
    }
}

export default Footer;
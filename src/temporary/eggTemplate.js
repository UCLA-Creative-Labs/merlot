import React from 'react';
import { Link } from 'gatsby';

import SEO from '~/src/components/monads/seo';

import '../scss/main.scss';
import '../scss/modules/temporary.scss';


class Egg extends React.Component {
    constructor(props){
        super()
        console.log(props.pageContext.title)
        this.egg = props.pageContext
        
    }
    render () {
        return(
            <div style={{ width: '100vw', height: '100vh' }}>
               <div
                style={{
                width: 'auto',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                paddingTop: '5%',
                margin: 'auto',
                'text-align': 'center',
                }}
            >

                <h1>{this.egg.level}. {this.egg.title}</h1>
                <center>
                    <img src={this.egg.img} style={{width:"85%"}}/>
                    <br/>
                    <p>{this.egg.caption}</p>
                    <form>
                <label>
                username
                <input type="text" name="firstName" />
                </label>
                <br/>
                <label>
                password 
                <input type="text" name="lastName" />
                </label>
                <br/>
                <button type="submit" onClick={
                    {}
                }>Submit</button>
            </form>
                </center>

            </div>
            
            </div>
        )
    }
}
    /*
    render () {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <div
                style={{
                width: 'auto',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                paddingTop: '5%',
                margin: 'auto',
                'text-align': 'center',
                }}
            >
                <SEO
                title='egg'
                keywords={[`creative`, `labs`, `website`, `ucla`, `design`, `projects`]}
                />
                <h1>{this.egg.level}. {this.egg.title}</h1>
                <center>
                    <img src={this.egg.img} style={{width:"85%"}}/>
                    <br/>
                    <p>{this.egg.caption}</p>
                    <form>
                <label>
                username
                <input type="text" name="firstName" />
                </label>
                <br/>
                <label>
                password 
                <input type="text" name="lastName" />
                </label>
                <br/>
                <button type="submit" onClick={
                    {}
                }>Submit</button>
            </form>
                </center>
            </div>
            </div>
        );

}
*/


export default Egg;

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
              name,
              level,
              id, 
              title,
              img,
              caption
          }
        }
      }
    }
  }
`;

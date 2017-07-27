import Toggle from 'react-toggle'

const Gender = (props) => (
<Toggle
  id='cheese-status'
  icons={{
      checked: <M/>,
      unchecked: <F/>,
    }}
  defaultChecked={true}
  onChange={e => props.onChange(e.target.checked)} />
)

export default Gender
export const M = () => (<label style={{textAlign: "center"}}>M</label>)
export const F = () => (<label style={{textAlign: "center"}}>F</label>)
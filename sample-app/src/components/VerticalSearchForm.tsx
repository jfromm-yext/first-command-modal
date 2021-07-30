import { useRef, KeyboardEvent } from 'react';
import { StatefulCore } from '@yext/answers-headless';
import { connectToStatefulCore } from '@yext/answers-headless-react';

function VerticalSearchForm(props: { statefulCore: StatefulCore }) {
  const statefulCore: StatefulCore = props.statefulCore;
  const inputRef = useRef<HTMLInputElement>(document.createElement('input'));
  const executeSearch = () => {
    statefulCore.setQuery(inputRef.current.value || '');
    statefulCore.executeVerticalQuery();
  }
  const handleKeyDown = (evt : KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      executeSearch();
    }
  }
  return (
    <div className='SearchForm'>
      <input className='SearchForm-input' ref={inputRef} onKeyDown={e => handleKeyDown(e)}/>
      <button onClick={executeSearch}>
        Vertical Search
      </button>
    </div>
  )
}

export default connectToStatefulCore(VerticalSearchForm)
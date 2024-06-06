import React from 'react'

const InputCode = ({ handleSubmit }) => {
  return (
    <div>
        <h1 className='text-white text-center text-2xl'>POE Build Trade Helper</h1>
        <p className='text-white text-center'>Put build import code and generate POE.trade URL for each Item!</p>
        <form className='flex flex-col justify-center items-center gap-2' onSubmit={handleSubmit}>
            <textarea className="w-3/4 max-w-4xl rounded-sm p-2 text-sm" placeholder="Put build import code here" type="text" name="importCode" rows='5' cols="50" required></textarea>
            <div className='flex flex-col md:flex-row justify-center items-center gap-2'>
                <select className='w-50 h-10 text-center' defaultValue="Necropolis" id="leagueSelect">
                    <option value="Necropolis">Necropolis</option>
                    <option value="Standard">Standard</option>
                    <option value="Ruthless%20Necropolis">Ruthless Necropolis</option>
                    <option value="Ruthless">Ruthless</option>
                    <option value="Hardcore%20Necropolis">Hardcore Necropolis</option>
                    <option value="Hardcore">Hardcore</option>      
                    <option value="HC%20Ruthless%20Necropolis">HardCore Ruthless Necropolis</option>
                    <option value="Hardcore%20Ruthless">Hardcore Ruthless</option>
                </select>
                <div className='flex flex-row gap-3'>
                    <button className='text-center min-w-10 p-1 rounded-md'>Go</button>
                    <button className='text-center min-w-10 p-1 rounded-md' onClick={(event) => {event.preventDefault();location.reload()}}>Restart</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default InputCode
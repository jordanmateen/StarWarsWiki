import React from 'react'

const TagItems = ({ tags, deleteTag }) =>{

    const tagList = tags.length ? (
        tags.map((tag) =>{
            return(
                <div key = {tag.id}>
                    <span onDoubleClick = {()=>{deleteTag(tag.id)}}>{tag.content}</span>
                </div>
            )
        })
    ) : (
    <p>No tags yet</p>
    )
    return(
        <div className = "tags">
            {tagList}
        </div>
    )
}

export default TagItems
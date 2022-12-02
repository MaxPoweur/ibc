import React, { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { IoMdClose } from 'react-icons/io';
import styles from './Tags.module.scss';

export interface TagType {
   label: string;
}

interface TagsProps {
   tags: TagType[];
   closable?: boolean;
   onClose?: (tag: TagType) => void;
}
const Tags = (props: TagsProps) => {
   const [tags, setTags] = useState<TagType[]>([]);
   useEffect(() => {
      setTags(props.tags);
   }, [props.tags]);
   return (
      <div className={`${styles.TagsContainer}`}>
         <div className="tags">
            {tags.map((tag, index) => <div key={index} className="tag">
               <span>{tag.label}</span>
               {props.closable && <div className="close-icon-container" onClick={() => props.onClose && props.onClose(tag)}>
                  <IoMdClose className="close-icon" />
               </div>}
            </div>)}
         </div>
      </div>
   );
};

export default Tags;
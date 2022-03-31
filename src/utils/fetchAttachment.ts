import axios from "axios";
import React from "react";

const fetchAttachment = (id: string) => {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:3042/post/attachment?id=${id}`).then((data) => {
            return data.blob()
        })
        .then((data) => {
            var reader = new FileReader();
            reader.onload = function() {                         
                var b64 = reader.result
                resolve(b64);
            }
            reader.readAsDataURL(data)
        }).catch(err => {
            console.log(err);
        });
    });

}

export default fetchAttachment;
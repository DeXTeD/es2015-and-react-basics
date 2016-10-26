export default function getFilmsIdList() (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1,2,3,4,5,6,7]);
        }, 500);
    })
);

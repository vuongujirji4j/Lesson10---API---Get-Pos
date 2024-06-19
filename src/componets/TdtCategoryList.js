import React from 'react'

export default function TdtCategoryList({ renderTdtCateGories, onAddNew }) {
    console.log("renderTdtCategories: ", renderTdtCateGories);
    let tdtCategoryElement = renderTdtCateGories.map((tdtCategory, index) => {
        return (
            <tr key={index}>
                <th>{index + 1}</th>
                <td>{tdtCategory.tdtId}</td>
                <td>{tdtCategory.tdtCategoryName}</td>
                <td>{tdtCategory.tdtCategoryStatus ? "Hien thi" : "Tam khoa"}</td>
            </tr>
        )
    })

    const tdtHandleAdd = ()=>{
        onAddNew(true);
    }
    return (
        <div className='container m-2'>
            <h2>Danh sach loai san pham</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ma loai</th>
                        <th>Ten loai</th>
                        <th>Trang thai</th>
                        <th>Chuc nang</th>
                    </tr>
                </thead>
                <tbody>
                    {tdtCategoryElement}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={tdtHandleAdd}>Them moi</button>
        </div>
    )
}
let madding = [
    {kegiatan: 'Lari', hari: 'Senin', foto:'https://cdn2.tstatic.net/palembang/foto/bank/images/orang-lari-pagi.jpg'},
    {kegiatan: 'Estafet', hari: 'Selasa', foto: 'https://moondoggiesmusic.com/wp-content/uploads/2019/07/Teknik-Lari-Estafet.png'}
]

let users = [
    {id: 'admin', password: 'admin'},
    {id: 'user', password: 'user'}
]

const confirmDelete = (index) => {
    document.querySelector(`#noDelete${index}`).innerHTML = `<input type="button" value="No" onclick="renderTabel()">`
    document.querySelector(`#yesDelete${index}`).innerHTML = `<input type="button" value="Yes" onclick="deleteMadding(${index})">`
}

const deleteMadding = (index) => {
    madding.splice(index, 1)
    renderTabel()
}

const editMadding = (i) => {
    if(document.querySelector('#kegiatanEdit').value !== ''){
        madding[i].kegiatan = document.querySelector('#kegiatanEdit').value
    }
    if(document.querySelector('#hariEdit').value !== ''){
        madding[i].hari = document.querySelector('#hariEdit').value
    }
    if(document.querySelector('#fotoEdit').value !== ''){
    madding[i].foto = document.querySelector('#fotoEdit').value
    }
    renderTabel()
}

const newMadding = () => {
    madding.push({
        kegiatan: document.querySelector('#kegiatanBaru').value,
        hari: document.querySelector('#hariBaru').value,
        foto: document.querySelector('#posterBaru').value
    })
    renderTabel()
}

const renderTabel = (i) => {
    document.querySelector('#greetings').innerHTML = '    <h2>ADMIN PAGE</h2>    '
    let renderArr = madding.map((val, index) => {
        if(index === i){
            return (
                `
                    <tr>
                        <td>${index+1}.</td>
                        <td><input type="text" name="" id="kegiatanEdit" placeholder="Edit Kegiatan"></td>
                        <td>
                            <select id="hariEdit">
                            <option value=''>${val.hari}</option>
                            <option value='Senin'>Senin</option>
                            <option value='Selasa'>Selasa</option>
                            <option value='Rabu'>Rabu</option>
                            <option value='Kamis'>Kamis</option>
                            <option value='Jumat'>Jumat</option>
                            <option value='Sabtu'>Sabtu</option>
                            <option value='Minggu'>Minggu</option>
                            </select>
                        </td>
                        <td><input type="text" name="" id="fotoEdit" placeholder="Edit Photo Link"></td>
                        <td><input type="button" value="Cancel" onclick="renderTabel()"></td>
                        <td><input type="button" value="Save" onclick="editMadding(${index})"></td>
                    </tr>
                `
            )
        }
        return (
            `
                <tr>
                    <td>${index+1}.</td>
                    <td>${val.kegiatan}</td>
                    <td>${val.hari}</td>
                    <td><img src="${val.foto}" alt="" srcset=""></td>
                    <td id="noDelete${index}"><input type="button" value="Delete" onclick="confirmDelete(${index})"></td>
                    <td id="yesDelete${index}"><input type="button" value="Edit" onclick="renderTabel(${index})"></td>
                </tr>
            `
        )
    })
    let addField = `
        <tr>
        <td></td>
        <td><input type="text" name="" id="kegiatanBaru" placeholder="Kegiatan Baru"></td>
        <td>
            <select id="hariBaru">
            <option value=''>Pilih Hari</option>
            <option value='Senin'>Senin</option>
            <option value='Selasa'>Selasa</option>
            <option value='Rabu'>Rabu</option>
            <option value='Kamis'>Kamis</option>
            <option value='Jumat'>Jumat</option>
            <option value='Sabtu'>Sabtu</option>
            <option value='Minggu'>Minggu</option>
            </select>
        </td>
        <td><input type="text" name="" id="posterBaru" placeholder="Direct Link Poster Baru"></td>
        <td colspan="2"><input type="button" value="Tambah Todo" onclick="newMadding()"></td>
        </tr>
    `
    document.querySelector('#logout').innerHTML = `
    <br>
    <br>
    <input type="button" value="Log Out" onclick="logout()">`
    renderArr.push(addField)
    document.querySelector('#outputTabel').innerHTML = renderArr.join('')
}

const login = () => {
    if(document.querySelector('#userName').value === users[0].id && document.querySelector('#passWord').value === users[0].password){
        document.querySelector('#userName').value = ''
        document.querySelector('#passWord').value = ''
        document.querySelector('#loginHtml').innerHTML = ''
        renderTabel()
    }else if(document.querySelector('#userName').value === findUser() && document.querySelector('#passWord').value === findPassword()){
        document.querySelector('#greetings').innerHTML = `    <h2>Welcome, ${document.querySelector('#userName').value}.</h2>    `
        document.querySelector('#userName').value = ''
        document.querySelector('#passWord').value = ''
        document.querySelector('#loginHtml').innerHTML = ''
        let renderArr = madding.map((val,index) => {
            return (
                `
                    <tr>
                        <td>${index+1}.</td>
                        <td>${val.kegiatan}</td>
                        <td>${val.hari}</td>
                        <td><img src="${val.foto}" alt="" srcset=""></td>
                        <td colspan="2"><strong>-</strong></td>
                    </tr>
                `
            )
        })
        document.querySelector('#logout').innerHTML = `
        <br>
        <br>
        <input type="button" value="Log Out" onclick="logout()">`
        document.querySelector('#outputTabel').innerHTML = renderArr.join('')
    }else{
        document.querySelector('#greetings').innerHTML = '    <h2>PASSWORD/USERNAME ANDA SALAH.</h2>    '
    }
}

const logout = () => {
    document.querySelector('#greetings').innerHTML = ''
    document.querySelector('#outputTabel').innerHTML = ''
    document.querySelector('#logout').innerHTML = ''
    document.querySelector('#loginHtml').innerHTML = `
    <p>Username: <input type="text" name="" id="userName"></p>
    <p>Password: <input type="password" name="" id="passWord"></p>
    <p><input type="button" value="Login" onclick="login()"></p>
    <p><input type="button" value="Register" onclick="register()"></p>
    `
}

const register = () => {
    let newId = document.querySelector('#userName').value
    let newPassword = document.querySelector('#passWord').value
    let existId = users.find((val) => {
        return val.id === newId
    })
    if(existId){
        document.querySelector('#greetings').innerHTML = `<h3>Username '${newId}' sudah terdaftar.
        silahkan pilih username yang lain.</h3>`
    }else if(newId === '' || newPassword === ''){
        document.querySelector('#greetings').innerHTML = `<h3>Username & Password tidak boleh kosong untuk registrasi.</h3>`
    }else{
        users.push({id: newId, password: newPassword})
        document.querySelector('#greetings').innerHTML =`<h3>'${newId}' telah berhasil diregistrasi. Silahkan login.</h3>`
    }
}

const findUser = () => {
    let existId = users.find((val) => {
        return val.id === document.querySelector('#userName').value
    })
    if(existId){
        return existId.id
    }else{
        return false
    }
}

const findPassword = () => {
    let existPassword = users.find((val) => {
        return val.password === document.querySelector('#passWord').value
    })
    if(existPassword){
        return existPassword.password
    }else{
        return false
    }

}

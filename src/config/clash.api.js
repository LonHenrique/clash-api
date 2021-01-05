const axios = require('axios')
const clashApi = axios.create({
    baseURL : 'https://api.clashroyale.com/v1',
    headers : {
        authorization : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImIzYWQ1ZGY3LWIzNTktNGUwNy05MTMwLTI2YWU2MDAzZjEyZSIsImlhdCI6MTYwOTgwNTIxMiwic3ViIjoiZGV2ZWxvcGVyLzhjNjM5YTQzLTE2NmEtMzAzOS04ZjU5LWFkZTg3MGRlOGRhNiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxNzAuODIuNjMuMTQ5Il0sInR5cGUiOiJjbGllbnQifV19.SdHt_P-BK4JscLSKiMGkn2YXjNus8BvYGdNaxGWJuHWQR_Ub13_PalmCFWP10p_Ae9OO_3P3cT1-PtM-Fd9iOw'        
    }
})

module.exports = clashApi;
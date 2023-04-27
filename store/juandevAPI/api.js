import axios from "axios"
const juandevAPI = axios.create({
  baseURL: "https://juan11042023-dev-75983-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_azul_list(payload) {
  return juandevAPI.get(`/api/v1/azul/`)
}
function api_v1_azul_create(payload) {
  return juandevAPI.post(`/api/v1/azul/`, payload.data)
}
function api_v1_wolf_list(payload) {
  return juandevAPI.get(`/api/v1/wolf/`)
}
function api_v1_wolf_create(payload) {
  return juandevAPI.post(`/api/v1/wolf/`, payload.data)
}
function api_v1_login_create(payload) {
  return juandevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_newmo_list(payload) {
  return juandevAPI.get(`/api/v1/newmo/`)
}
function api_v1_newmo_create(payload) {
  return juandevAPI.post(`/api/v1/newmo/`, payload.data)
}
function api_v1_signup_create(payload) {
  return juandevAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return juandevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return juandevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return juandevAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return juandevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function rest_auth_login_create(payload) {
  return juandevAPI.post(`/rest-auth/login/`, payload.data)
}
function api_v1_alligator_list(payload) {
  return juandevAPI.get(`/api/v1/alligator/`)
}
function api_v1_alligator_create(payload) {
  return juandevAPI.post(`/api/v1/alligator/`, payload.data)
}
function api_v1_azul_retrieve(payload) {
  return juandevAPI.get(`/api/v1/azul/${payload.id}/`)
}
function api_v1_azul_update(payload) {
  return juandevAPI.put(`/api/v1/azul/${payload.id}/`, payload.data)
}
function api_v1_azul_partial_update(payload) {
  return juandevAPI.patch(`/api/v1/azul/${payload.id}/`, payload.data)
}
function api_v1_azul_destroy(payload) {
  return juandevAPI.delete(`/api/v1/azul/${payload.id}/`)
}
function api_v1_wolf_retrieve(payload) {
  return juandevAPI.get(`/api/v1/wolf/${payload.id}/`)
}
function api_v1_wolf_update(payload) {
  return juandevAPI.put(`/api/v1/wolf/${payload.id}/`, payload.data)
}
function api_v1_wolf_partial_update(payload) {
  return juandevAPI.patch(`/api/v1/wolf/${payload.id}/`, payload.data)
}
function api_v1_wolf_destroy(payload) {
  return juandevAPI.delete(`/api/v1/wolf/${payload.id}/`)
}
function rest_auth_logout_retrieve(payload) {
  return juandevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return juandevAPI.post(`/rest-auth/logout/`)
}
function api_v1_newmo_retrieve(payload) {
  return juandevAPI.get(`/api/v1/newmo/${payload.id}/`)
}
function api_v1_newmo_update(payload) {
  return juandevAPI.put(`/api/v1/newmo/${payload.id}/`, payload.data)
}
function api_v1_newmo_partial_update(payload) {
  return juandevAPI.patch(`/api/v1/newmo/${payload.id}/`, payload.data)
}
function api_v1_newmo_destroy(payload) {
  return juandevAPI.delete(`/api/v1/newmo/${payload.id}/`)
}
function api_v1_alligator_retrieve(payload) {
  return juandevAPI.get(`/api/v1/alligator/${payload.id}/`)
}
function api_v1_alligator_update(payload) {
  return juandevAPI.put(`/api/v1/alligator/${payload.id}/`, payload.data)
}
function api_v1_alligator_partial_update(payload) {
  return juandevAPI.patch(`/api/v1/alligator/${payload.id}/`, payload.data)
}
function api_v1_alligator_destroy(payload) {
  return juandevAPI.delete(`/api/v1/alligator/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return juandevAPI.post(`/rest-auth/registration/`, payload.data)
}
function modules_articles_article_list(payload) {
  return juandevAPI.get(`/modules/articles/article/`)
}
function modules_articles_article_create(payload) {
  return juandevAPI.post(`/modules/articles/article/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return juandevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return juandevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function modules_articles_article_retrieve(payload) {
  return juandevAPI.get(`/modules/articles/article/${payload.id}/`)
}
function modules_articles_article_update(payload) {
  return juandevAPI.put(
    `/modules/articles/article/${payload.id}/`,
    payload.data
  )
}
function modules_articles_article_partial_update(payload) {
  return juandevAPI.patch(
    `/modules/articles/article/${payload.id}/`,
    payload.data
  )
}
function modules_articles_article_destroy(payload) {
  return juandevAPI.delete(`/modules/articles/article/${payload.id}/`)
}
function rest_auth_password_reset_confirm_create(payload) {
  return juandevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return juandevAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function modules_two_factor_authentication_2fa_retrieve(payload) {
  return juandevAPI.get(`/modules/two-factor-authentication/2fa`)
}
function modules_two_factor_authentication_2fa_create(payload) {
  return juandevAPI.post(`/modules/two-factor-authentication/2fa`)
}
function modules_two_factor_authentication_verify_destroy(payload) {
  return juandevAPI.delete(
    `/modules/two-factor-authentication/verify/${payload.id}/`
  )
}
function modules_two_factor_authentication_twofactorauth_list(payload) {
  return juandevAPI.get(`/modules/two-factor-authentication/twofactorauth/`)
}
function modules_two_factor_authentication_twofactorauth_create(payload) {
  return juandevAPI.post(
    `/modules/two-factor-authentication/twofactorauth/`,
    payload.data
  )
}
function modules_two_factor_authentication_twofactorauth_retrieve(payload) {
  return juandevAPI.get(
    `/modules/two-factor-authentication/twofactorauth/${payload.id}/`
  )
}
function modules_two_factor_authentication_twofactorauth_update(payload) {
  return juandevAPI.put(
    `/modules/two-factor-authentication/twofactorauth/${payload.id}/`,
    payload.data
  )
}
function modules_two_factor_authentication_twofactorauth_partial_update(
  payload
) {
  return juandevAPI.patch(
    `/modules/two-factor-authentication/twofactorauth/${payload.id}/`,
    payload.data
  )
}
function modules_two_factor_authentication_twofactorauth_destroy(payload) {
  return juandevAPI.delete(
    `/modules/two-factor-authentication/twofactorauth/${payload.id}/`
  )
}
function modules_two_factor_authentication_twofactorauth_send_otp_create(
  payload
) {
  return juandevAPI.post(
    `/modules/two-factor-authentication/twofactorauth/send_otp/`,
    payload.data
  )
}
export const apiService = {
  api_v1_azul_list,
  api_v1_azul_create,
  api_v1_wolf_list,
  api_v1_wolf_create,
  api_v1_login_create,
  api_v1_newmo_list,
  api_v1_newmo_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  api_v1_alligator_list,
  api_v1_alligator_create,
  api_v1_azul_retrieve,
  api_v1_azul_update,
  api_v1_azul_partial_update,
  api_v1_azul_destroy,
  api_v1_wolf_retrieve,
  api_v1_wolf_update,
  api_v1_wolf_partial_update,
  api_v1_wolf_destroy,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_newmo_retrieve,
  api_v1_newmo_update,
  api_v1_newmo_partial_update,
  api_v1_newmo_destroy,
  api_v1_alligator_retrieve,
  api_v1_alligator_update,
  api_v1_alligator_partial_update,
  api_v1_alligator_destroy,
  rest_auth_registration_create,
  modules_articles_article_list,
  modules_articles_article_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  modules_articles_article_retrieve,
  modules_articles_article_update,
  modules_articles_article_partial_update,
  modules_articles_article_destroy,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create,
  modules_two_factor_authentication_2fa_retrieve,
  modules_two_factor_authentication_2fa_create,
  modules_two_factor_authentication_verify_destroy,
  modules_two_factor_authentication_twofactorauth_list,
  modules_two_factor_authentication_twofactorauth_create,
  modules_two_factor_authentication_twofactorauth_retrieve,
  modules_two_factor_authentication_twofactorauth_update,
  modules_two_factor_authentication_twofactorauth_partial_update,
  modules_two_factor_authentication_twofactorauth_destroy,
  modules_two_factor_authentication_twofactorauth_send_otp_create
}

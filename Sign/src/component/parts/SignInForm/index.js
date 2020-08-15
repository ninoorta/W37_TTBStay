import React, { Component } from 'react'

class SignInForm extends Component {
    constructor(props) {
        super(props)
    }

    

    render() {
        return (
            <div className="col-lg-5 col-md-12 col-xs-12 first-xs sign-up__right">
                <div className="account">
                    <form action="" className="account__sign-in">
                        <h3 className="sign-in__title bold">Đăng nhập</h3>
                        <div className="sign-in__input">
                            <div className="sign-in__input-item sign__input-item">
                                <label className="bold">
                                    Địa chỉ email
                    </label>
                                <div className="input-item__wrapper">
                                    <input type="text" placeholder="Địa chỉ email" />
                                    <span>
                                        <i className="far fa-envelope" />
                                    </span>
                                    <div className="input-item__error email">
                                    </div>
                                </div>
                            </div>
                            <div className="sign-in__input-item sign__input-item">
                                <label className="bold">
                                    Mật khẩu
                      <span className="input-item__password-header">(Tối thiểu 8 ký tự)</span>
                                </label>
                                <div className="input-item__wrapper">
                                    <input type="text" placeholder="Mật khẩu" />
                                    <span>
                                        <i className="fas fa-lock" />
                                    </span>
                                    <div className="input-item__error password">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="account__btn">
                        <button className="btn bold">Đăng nhập</button>
                        <div className="account__btn-sign-in">
                            Bạn chưa có tài khoản TTBStay?
                  <span className="btn-sign-in__text bold" style={{ cursor: 'pointer' }}>Đăng ký</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignInForm

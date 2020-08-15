import React, { Component } from 'react'

class SignUpForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-lg-5 col-md-12 col-xs-12 first-xs sign-up__right">
                <div className="account">
                    <form action="" className="account__sign-up">
                        <h3 className="sign-up__title">Đăng ký thành viên</h3>
                        <div className="sign-up__input">
                            <div className="sign-up__input-item sign__input-item">
                                <label className="bold">
                                    Địa chỉ email
          </label>
                                <div className="input-item__wrapper">
                                    <input type="text" />
                                    <span>
                                        <i className="far fa-envelope" />
                                    </span>
                                    <div className="input-item__error email">
                                    </div>
                                </div>
                            </div>
                            <div className="sign-up__input-item sign__input-item">
                                <label className="bold">
                                    Số điện thoại
          </label>
                                <div className="input-item__wrapper">
                                    <input type="tel" placeholder="Số điện thoại" />
                                    <div className="input-item__error tel">
                                    </div>
                                </div>
                            </div>
                            <div className="sign-up__input-item sign__input-item">
                                <label className="bold">
                                    Tên
          </label>
                                <div className="input-item__wrapper">
                                    <input type="text" />
                                    <div className="input-item__error name">
                                    </div>
                                </div>
                            </div>
                            <div className="sign-up__input-item sign__input-item">
                                <label className="bold">
                                    Họ và tên đệm
          </label>
                                <div className="input-item__wrapper">
                                    <input type="text" />
                                    <div className="input-item__error name">
                                    </div>
                                </div>
                            </div>
                            <div className="sign-up__input-item sign__input-item">
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
                            <div className="sign-up__input-item sign__input-item">
                                <label className="bold">
                                    Xác nhận mật khẩu mới
          </label>
                                <div className="input-item__wrapper">
                                    <input type="text" />
                                    <span>
                                        <i className="fas fa-lock" />
                                    </span>
                                    <div className="input-item__error re-password">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="account__btn">
                        <button className="btn bold">Đăng ký</button>
                        <div className="account__btn-sign-in">
                            Bạn đã có tài khoản TTBStay?
        <span className="btn-sign-in__text bold" style={{ cursor: 'pointer' }}>Đăng nhập</span>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default SignUpForm

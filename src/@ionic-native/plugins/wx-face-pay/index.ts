/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name wx Face Pay
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { wxFacePay } from '@ionic-native/wx-face-pay';
 *
 *
 * constructor(private wxFacePay: wxFacePay) { }
 *
 * ...
 *
 *
 * this.wxFacePay.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'WxFacePay',
  plugin: 'com.pay.facepay', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.FacePay', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class WxFacePay extends IonicNativePlugin {

  /**
   *
   *初始化
   * @returns {Promise<any>}
   * @memberof wxFacePay
   */
  @Cordova()
  initPay(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   *获取凭证
   *
   * @param {*} [options]
   * @returns {Promise<any>}
   * @memberof wxFacePay
   */
  @Cordova()
  getFaceRawdata(options?: any): Promise<any> { return; }


  /**
   *获取face code
   *
   * @param {*} [options]
   * @returns {Promise<any>}
   * @memberof wxFacePay
   */
  @Cordova()
  getFaceCode(options?: any): Promise<any> { return; }


  /**
   *更新支付状态
   *
   * @param {*} [options]
   * @returns {Promise<any>}
   * @memberof WxFacePay
   */
  @Cordova()
  updateResult(options?: any): Promise<any> { return; }
  /**
   * 获取uuid
   */
  @Cordova()
  getUUID(): Promise<any> { return; }
}

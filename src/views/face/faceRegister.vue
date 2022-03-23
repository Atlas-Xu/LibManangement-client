<template>
  <el-main>
    <el-card class="box-card">
      <div
        style="
        margin: 15px 0px;
        color: #7b7b7b;
        font-weight: 600;
        font-size: 15px;
      "
      >
        请选择用于人脸注册的照片，建议选择近期证件照
      </div>
      <el-upload
        class="upload-demo"
        ref="upload"
        action="#"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-change="handleChange"
        :file-list="fileList"
        :auto-upload="false"
        list-type="picture"
        :limit="1">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="addFace">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传一个jpg/png文件，且不超过2mb</div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" width="400px">
        <img width="100%" :src="imgUrl" alt="">
      </el-dialog>
    </el-card>



  </el-main>
</template>

<script>
import { addFaceApi } from '@/api/face'
import { getUserId } from '@/utils/auth'
import messageBox from 'element-ui/packages/message-box'
export default {
  data() {
    return {
      imgUrl: '',
      fileList: [],
      dialogVisible: false,
      base64Str: ''
    }
  },
  methods: {
    handleChange(file, fileList) {
      let fileReader = new FileReader()
      fileReader.readAsDataURL(file.raw)
      fileReader.onload = () => {
        // console.log('file 转 base64结果：' + fileReader.result)
        this.base64Str = fileReader.result
      }
      fileReader.onerror = function(error) {
        console.log('Error: ', error)
      }
    },
    handleRemove(file, fileList) {
      console.log(file);
    },
    handlePreview(file) {
      this.imgUrl = URL.createObjectURL(file.raw);
      console.log(this.imgUrl)
      this.dialogVisible = true

    },
    async addFace() {
      if (this.base64Str == '') {
        this.$message({
          type: 'error',
          message: '请选择图片'
        });
        return
      } else {
        const param = {
          base64Str: this.base64Str,
          readerId: getUserId()
        }
        console.log("param的" + param.base64Str)
        const res = await addFaceApi(param)
        if (res && res.code == 200) {
          this.$message.success(res.msg)
          setTimeout(function() {
            window.location.reload()
          }, 5000)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.uploader-avatar>>>.el-upload {
  background-color: #fbfdff;
  border: 1px dashed #c0ccda;
  border-radius: 6px;
  box-sizing: border-box;
  width: 148px;
  height: 148px;
  cursor: pointer;
  line-height: 146px;
  vertical-align: top;
  overflow: hidden;
}
.img-show{
  position: relative;
  border: 1px solid #c0ccda;
  border-radius: 6px;
  box-sizing: border-box;
  width: 148px;
  height: 148px;
  cursor: pointer;
  overflow: hidden;
}
.bottom-text {
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  height: 25px;
  line-height: 25px;
  text-align: center;
  position: absolute;
  font-weight: 600;
}
.show-header {
  background: #00c0ef;
  color: #fff;
  height: 80px;
  border-radius: 5px;
  position: relative;
}
.show-num {
  font-size: 38px;
  font-weight: 600;
  padding: 5px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.fileBox{
  margin: 5px auto;
}
</style>

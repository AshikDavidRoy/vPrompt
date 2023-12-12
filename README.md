<div align="center">
  <h1>vPrompt</h1>
  <b> Number Plate detect from video using yolov8 </b>
</div>

### Run an example

1. Setup python env

       python -m venv venv

2. Install dependencies

       pip install -r requirements.txt

3. Install dependencies

       pip install -r requirements.txt

4. Clone [Sort](https://github.com/abewley/sort) module for object tracking

       git clone https://github.com/abewley/sort.git
   
5. Download the custom trained model from [here](https://drive.google.com/file/d/10sf_Jqa6vAm73v7nRVO0oNTNqZxvyS1o/view?usp=sharing) and add it to models directory.

6. Download the sample video from [here](https://drive.google.com/file/d/1YmHTElM6rh5uBpvaoUYpYTHK2odJkoM6/view?usp=drive_link) and add it to video directory.


### Train the model

- Use this jupyter [notebook](https://github.com/reenphygeorge/vPrompt/blob/main/train/video_analytics_train.ipynb) file to train in Google Colab
- Use this [dataset](https://universe.roboflow.com/roboflow-universe-projects/license-plate-recognition-rxg4e/dataset/4) to train

# Generated by Django 3.1.1 on 2020-09-25 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Gear',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('desc', models.CharField(max_length=500)),
                ('brand', models.CharField(max_length=128)),
                ('weight_grams', models.IntegerField(blank=True, null=True)),
                ('length_mm', models.IntegerField(blank=True, null=True)),
                ('width_mm', models.IntegerField(blank=True, null=True)),
                ('depth_mm', models.IntegerField(blank=True, null=True)),
                ('locking', models.BooleanField(default=False)),
            ],
        ),
    ]
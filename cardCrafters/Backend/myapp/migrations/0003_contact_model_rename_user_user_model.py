# Generated by Django 4.2.5 on 2023-09-29 15:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_user_customclaims_alter_user_email_alter_user_name_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='contact_model',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=100)),
                ('Email', models.EmailField(max_length=100)),
                ('Message', models.CharField(max_length=1000)),
            ],
        ),
        migrations.RenameModel(
            old_name='User',
            new_name='user_model',
        ),
    ]

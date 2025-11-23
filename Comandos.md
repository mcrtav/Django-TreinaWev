# Aula Django - TREINAWEB
https://www.youtube.com/playlist?list=PLZ5WLsqE1WPGPA0Z0H1XB8P6UwgTHOSaf

# #####################################################
# AULA 01 - Como criar e executar um projeto Django   #
# #####################################################
https://www.youtube.com/watch?v=rwSHQqQWGnI&list=PLZ5WLsqE1WPGPA0Z0H1XB8P6UwgTHOSaf&index=1

# Ambient Virtual
python -m venv .venv

# Verififcar restrição de segurança
# https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/get-executionpolicy?view=powershell-7.5
Get-ExecutionPolicy -List

        Scope ExecutionPolicy
        ----- ---------------
MachinePolicy       Undefined
   UserPolicy       Undefined
      Process       Undefined
  CurrentUser    RemoteSigned
 LocalMachine    RemoteSigned

# Liberar restrição de segurnaça
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
# ??? Get-ExecutionPolicy -Scope Process -ExecutionPolicy bypass 
# ??? Get-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned

# Ativar ambiente Virtual apos liberar restrição de segurança
.\.venv\Scripts\activate

# instalar o django no python
pip install django

# criar a estrutura basica do projeto
# o nome setup pode colocar outro nome de projeto mais por boas praticas coloca-se assim
# não esquecer de colocar o ponto para não duplicar a pagina
django-admin startproject setup .


# ativar o servidor
python manage.py runserver



# #########################################################################
# AULA 02 - Como é a estrutura de pastas de um projeto Django e como criar uma app   #
# #######################################################################
https://www.youtube.com/watch?v=PHZjZODh9gU&list=PLZ5WLsqE1WPGPA0Z0H1XB8P6UwgTHOSaf&index=2